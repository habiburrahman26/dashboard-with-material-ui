import { Box, TextField, Button } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  address1: '',
  address2: '',
};

const phoneRegExp =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const userSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('Invalid email').required('required'),
  contact: yup
    .string()
    .matches(phoneRegExp, 'Invalid phone number')
    .required('required'),
  address1: yup.string().required('required'),
  address2: yup.string().required('required'),
});

const Form = () => {
  const isMobile = useMediaQuery('(min-width:600px)');

  const handleFromSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subTitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFromSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(0,1fr)"
              sx={{
                '& > div': { gridColumn: isMobile ? 'span 4' : undefined },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  gridColumn: 'span 2',
                }}
              />
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
