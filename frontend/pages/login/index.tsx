import { LoginContent } from "@/components/content/login";
import { PageLayout, HeaderLayout, FooterLayout } from "@/components/layout";


function LoginHeader() {
  return <HeaderLayout title={'로그인'} transparent />
}


export default function LoginPage() {
  return <PageLayout
    header={<LoginHeader />}
    content={<LoginContent />}
    footer={<FooterLayout />}
  />
}