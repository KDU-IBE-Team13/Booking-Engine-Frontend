import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StyledBox, StyledCheckIcon, StyledStepper } from './CustomStepperStyles';
import { t } from 'i18next';

const steps = [
  'chooseRoom',
  'chooseAddOn',
  'checkOut',
];


export default function CustomStepper() {
  return (
    <StyledBox>
      <StyledStepper activeStep={1} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel 
              StepIconComponent={StepIconWithCustomColor}
              StepIconProps={{ active: index === 0 }}
            >
              {index+1}: {t(`roomPage.${label}`)}
            </StepLabel>
          </Step>
        ))}
      </StyledStepper>
    </StyledBox>
  );
}

function StepIconWithCustomColor(props) {
  const { active, completed, className } = props;

  let icon;
  if (completed) {
    icon = <StyledCheckIcon />;
  } else {
    icon = null;
  }

  return (
    <div
      className={`${className} ${completed ? 'completed' : ''}`}
      style={{
        backgroundColor: active ? '#D0182B' : '#DADADA', 
        color: completed ? 'white' : '#9E9E9E',
        borderRadius: '100%',
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {icon}
    </div>
  );
}
