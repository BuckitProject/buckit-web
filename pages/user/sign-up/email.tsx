import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
} from 'react';
import styles from '../../../styles/layout/user/InputPhoneNumber.module.scss';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { TextField } from '@mui/material';
import FullWidthButton from '../../../components/common/buttons/full_width_button';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { createUserAtom } from '../../../recoil';
import { SIGNUP_PHONE, SIGNUP_TERMS } from '../../../constants';
import { CreateUserType } from '../../../interface';
import { isEmail } from '../../../utils';

const Email = () => {
  // todo : 휴대폰 인증 코드 받았는 지 확인하기
  // todo : 이메일 정규식 추가
  const router = useRouter();
  const [createUser, setCreateUser] =
    useRecoilState<CreateUserType>(createUserAtom);

  const goBack = async () => {
    await router.push(SIGNUP_PHONE);
  };

  const onClick = async () => {
    if (isEmail(createUser.email)) {
      await router.push(SIGNUP_TERMS);
      return;
    }

    alert('올바른 이메일을 입력해주세요');
    return;
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCreateUser({
      ...createUser,
      email: value,
    });
  };

  useEffect(() => {
    if (!createUser.name) {
      router.push(SIGNUP_PHONE).catch((err) => console.error(err));
    }
  });

  return (
    <div className={styles.container}>
      <AppBarWithBackArrow onClick={goBack} />
      <main className={styles.main_container}>
        <div className={styles.title_container}>
          <div className={styles.title}>이메일을 입력해주세요</div>
          <TextField
            onChange={onChange}
            value={createUser.email}
            variant={'standard'}
            fullWidth={true}
            color={'success'}
            inputProps={{
              type: 'email',
            }}
            sx={{
              input: {
                textAlign: 'center',
                fontSize: '20px',
              },
            }}
          />
        </div>
        <div className={styles.footer}>
          <FullWidthButton
            variant={'contained'}
            text_color={'white'}
            padding={'15px 0'}
            onClick={onClick}
          >
            다음(2/3)
          </FullWidthButton>
        </div>
      </main>
    </div>
  );
};

export default Email;
