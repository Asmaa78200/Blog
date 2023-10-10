import {Box, Button, TextField, Textfield, Typography } from '@mui/material'
import{ useFormik} from ' fromik';
import * as yup from 'yup';
import Dropzone from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import{ toast } from 'react-toastify';
import ReactQuill from 'React-quill';
import 'react-quill/dist/quill.snow.css';
import { modules } from '../components/moduleToolbar';


const validationSchema = yup.object({
    title: yup
        .string('Add a post title')
        .min(4,'text content should have minimun of 4 characters')
        .required('post title is required'),
    content: yup
        .string('Add text content')
        .min(10,'text content should have a minimum of 10 characters')
        .required('text content is required'),

});

const CreatePost = () => {
    
    const {
        values,
        errors,
        touched,
        handleBlur,
        handlechange,
        handleSubmit,
        setFieldValue
    } = userFormik({
        title:'',
        content:'',
        image: null,
    },

       validationSchema, validationSchema,
       onSubmit, (values, actions) => {
       createNewPost(values);
        //alert(JSON.stringfy(values, null, 2));
        actions.resetForm();
    });

    const createNewPost = async (values) => {
        try{
            const { data } = await axios.post('/api/post/create', values);
            toast.success('post created');
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
        }
    }

    return (
      <>
        <Box sx={{ bgcolor: 'white', padding: '20px 200px' }}>
          <Typography variant='h5' sx={{ pb: 4 }}>Create Post</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField sx={{ mb: 3 }}
                fullwidth
                id="title"
                label="post title"
                name="title"
                InputLabelProps={{
                    shrink: true ,
                }}
                placeholder="Post title"
                value={values.title}
                onChange={handlechange}
                onBlur={handleBlur}
                error={touched.title && Boolean(errors.title)}
                helperText={touched.title && errors.title}
            />
            <Box sx={{ mb : 3}}>
                <ReactQuill
                theme="snow"
                placeholder={'Write the post content....'}
                modules={modules}
                value={values.content}
                onChange={(e) => setFieldValue('content', e)}                />
                <Box component='span' sx={{color:'#d32f2f',fontSize:"12px", pl:2}}>{touched.content && errors.content}</Box>
            </Box>

            <Box border='2px dashed blue' sx={{ p:1 }}>
                <Dropzone
                acceptedFiles=",jpg,gpeg,.png"
                multiple={false}
                //maxfiles={3}
                onDrop={(acceptedFiles)=>
                    acceptedFiles.map((file,index)=>{
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onloadend = () =>{
                            setFieldValue ('image',reader.result)
                        }
                    })
                }
            >
                {({getRootProps, getInputProps, isDragActive})=>{
                    <Box
                      {...getRootProps()}

                      p="1rem"
                      sx={{"&:hover":{ cursor:"pointer"},bgcolor:isDragtive?"#cceffc": "#fafafa"}}
                    >
                        <input {...getInputProps()}/>
                        {
                            isDragActive ? 
                            <>
                            <p style={{ textAlign: "center"}}><CloudUploadIcon sx={{ color:"primary.main" , mr:2}}/></p>
                            <p style={{ textAlign: "center",fontsize:"12px"}}>Drop here!</p>
                            </>:

                            values.image === null ?
                            <>
                            <p style={{ textAlign: "center"}}><CloudUploadIcon sx={{ color:"primary.main" , mr:2}}/></p>
                            <p style={{ textAlign: "center",fontsize:"12px"}}>Drag an Drop image here or click to choose</p>
                            
                            </>:
                            
                            <>
                            <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems:'center'}}>
                              <Box>   <img style={{ maxWidth: "100px"}} src={values.image}alt=""/></Box>
                            </Box>
                            </>
                        }
                    </Box>  
                }}
            </Dropzone>
            </Box>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                elevation={0}
                sx={{ mt: 3, p:1, mb: 2, borderRadius: "25px",}}
                //disabled={loading}
            >
                Create Post
            </Button>
                </Box>
          </Box>
    
      </>
    );
  export default CreatePost;
  