import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StyledBox, StyledStepper } from './CustomStepperStyles';

const steps = [
  'Choose room',
  'Choose add on',
  'Checkout',
];

export default function CustomStepper() {
  return (
    <StyledBox>
      <StyledStepper activeStep={1} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{index+1}: {label}</StepLabel>
          </Step>
        ))}
      </StyledStepper>
    </StyledBox>
  );
}