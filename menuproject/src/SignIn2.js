import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import './index.css';


 class Check extends React.Component {
   validationSchema() {
     return Yup.object().shape({
       username: Yup.string()
         .required('Username is required')
         .min(6, 'Username must be at least 6 characters')
         .max(20, 'Username must not exceed 20 characters'),
       password: Yup.string()
         .required('Password is required')
         .min(6, 'Password must be at least 6 characters')
         .max(40, 'Password must not exceed 40 characters'),
     });
   }

   constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
  
   handleSubmit(data) {
     console.log(JSON.stringify(data, null, 2));
   }

   render() {
     const initialValues = {
       username: '',
       password: '',
     };
         return (
       <div className="register-form">
         <Formik
           initialValues={initialValues}
           validationSchema={this.validationSchema}
           onSubmit={this.handleSubmit}
         >
           {({ resetForm }) => (
             <Form>
               <div className="form-group">
                <div className = "headerForm">
               <Avatar sx={{ m: 1, bgcolor: '#c59d5f' }}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          </div>
               </div>
               <div className="form-group">
                 <label htmlFor="username"> Username </label>
                 <Field name="username" type="text" className="form-control" />
                 <ErrorMessage
                   name="username"
                   component="div"
                   className="text-danger"
                 />
               </div>
               <div className="form-group">
                 <label htmlFor="password"> Password </label>
                 <Field
                   name="password"
                   type="password"
                   className="form-control"
                 />
                 <ErrorMessage
                   name="password"
                   component="div"
                   className="text-danger"
                 />
               </div>
               <div className="form-group btn-container">
                <Button variant= "contained" type="submit" className="btn btn-primary btn-space">
                  {/* figure out how to move to menu page upon valid log in */}
                   Log In
                 </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                 <Button
                   variant="contained"
                   type="button"
                   onClick={resetForm}
                   className="btn btn-warning float-right btn-space"
                 ><Link to = "/menu">
                   Continue as Guest
                   </Link>
                 </Button>
               </div>
             </Form>
           )}
         </Formik>
       </div>
     );
   }
 }

 export default Check;