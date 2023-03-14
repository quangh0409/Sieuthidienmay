import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Review from '../../ReviewCheckout/ReviewForm';
import Header from '../../Header/Header';
import OrderInformation from '../../AddressForm/OrderInfo';
import { Footer } from '../../Footer/Footer';

const steps = ['Thông tin đặt hàng', 'Thanh toán'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <OrderInformation />;
    case 1:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container component='main' maxWidth='sm' sx={{ mb: 4, marginTop:'100px', minHeight:'450px' }}>
        <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component='h1' variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant='h5' gutterBottom>
                Cảm ơn đã sử dụng dịch vụ
              </Typography>
              <Typography variant='subtitle1'>
                Mã đặt hàng của bạn là #2001539. Chúng tôi đã gửi mã đặt hàng đến email của bạn, chúng tôi sẽ cập nhật thông tin khi đơn hàng được vận chuyển
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button variant='contained' onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                  {activeStep === steps.length - 1 ? 'Đặt hàng' : 'Tiếp tục'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}
