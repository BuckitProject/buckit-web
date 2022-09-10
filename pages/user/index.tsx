import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/imageBuckitLogo.png';
import styles from '../../styles/pages/user/LoginHome.module.scss';
import FullWidthButton from '../../components/common/buttons/full_width_button';
import { Button } from '@mui/material';

const LoginHome = () => {
  // todo : 로그인 화면 전환
  // todo : 회원가입 화면 전환
  // todo : 비밀번호 찾기 화면전환
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Image src={logo} alt={'로고'} layout={'responsive'} />
      </div>
      <div className={styles.login_home_dec}>
        지금 로그인 하고
        <br />
        새로운 프로젝트를 확인하세요
      </div>
      <div className={styles.buttons_container}>
        <FullWidthButton
          variant={'contained'}
          text_color={'white'}
          padding={'15px 0'}
        >
          로그인
        </FullWidthButton>
        <div className={styles.divider} />
        <FullWidthButton
          variant={'outlined'}
          text_color={'#4EB08B'}
          backgroundColor={'white'}
          padding={'15px 0'}
          hover_color={'white'}
        >
          회원가입
        </FullWidthButton>
        <div className={styles.divider} />
        <Button variant={'text'} sx={{ color: '#C9C9C9' }}>
          혹시 비밀번호를 잊으셨나요?
        </Button>
      </div>
    </div>
  );
};

export default LoginHome;
