import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import styles from './Login.module.scss';

export const Registration = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch();
  const { register, handleSubmit, setError, formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "Вася Пупкин",
      email: "vasya@test.ru",
      password: "1234",
    },
    mode: "onChange"
  });

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <TextField className={styles.field} label="Полное имя" fullWidth />
      <TextField className={styles.field} label="E-Mail" fullWidth />
      <TextField className={styles.field} label="Пароль" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Зарегистрироваться
      </Button>
    </Paper>
  );
};
