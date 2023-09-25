import { EatEditContent } from "@/components/content/eat"
// import { useRouter } from "next/router"
import { NavigationHeader, PageLayout } from "@/components/layout";

function EatEditPageHeader() {
    return <NavigationHeader title="수정페이지" />
}

export default function EatEditPage() {
    // const { eat_id } = useRouter().query
    return <PageLayout
        header={<EatEditPageHeader />}
        content={<EatEditContent />}
    />
    {/* EatEditPage: {eat_id} */ }


}