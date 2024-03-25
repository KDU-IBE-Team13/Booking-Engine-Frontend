import Button from '@mui/material/Button';
import { StyledButton } from './SearchButtonStyles';
import { useTranslation } from 'react-i18next';

const SearchButton = () => {
  const {t} = useTranslation();
  return (
    <StyledButton variant="contained">{t('roomPage.searchDates')}</StyledButton>
  )
};

export default SearchButton;
