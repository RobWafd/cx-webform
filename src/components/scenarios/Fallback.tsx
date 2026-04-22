import PageLayout from '../PageLayout';
import PrimaryButton from '../PrimaryButton';

export default function Fallback() {
  return (
    <PageLayout>
      <div className="flex flex-col text-center px-4 py-8">
        <h2 className="text-[24px] leading-[28px] font-semibold text-wafd-green mb-4">Welcome to WaFd Bank</h2>
        <p className="text-wafd-text mb-8 text-[16px] leading-[24px]">Your account is setup and ready for action. Manage your banking on the go.</p>
        <PrimaryButton href="https://online.wafdbank.com/">Back To Portal</PrimaryButton>
      </div>
    </PageLayout>
  );
}
