import React from 'react';
import { useWindowSize } from 'hooks/useWindowSize';

import { SplitPage } from 'components/layouts/SplitPage';

import { AccountPreview } from 'components/sections/AccountPreview';
import { CreateAccountForm } from 'components/sections/CreateAccountForm';

export const SignUp: React.FC = () => {
  const size = useWindowSize();
  return (
    <SplitPage
      style={{
        background:
          size.width && size.width < 1024
            ? '#fff'
            : 'linear-gradient(to right, #fff 50%, #4F46E5 50%)',
      }}
      firstPage={<CreateAccountForm />}
      secondPage={<AccountPreview />}
    />
  );
};
