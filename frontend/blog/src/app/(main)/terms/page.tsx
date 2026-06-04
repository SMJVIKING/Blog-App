import Container from "@/components/ui/Container";
import TermsAndConditions from "@/components/ui/TermsAndConditions";

export default function page() {
  return (
    <main className="min-h-screen">
      <Container className="pt-30 pb-10">
        <TermsAndConditions />
      </Container>
    </main>
  );
}
