import Link from "next/link";
import { ArrowLeft, Rocket } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[65vh] place-items-center px-4 text-center">
      <div>
        <Rocket className="mx-auto h-10 w-10 text-lilac-700" />
        <p className="eyebrow mt-5">Signal lost</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-ink-950">This page never made the drop.</h1>
        <p className="mx-auto mt-4 max-w-lg text-ink-700">Return to the Prime Heroes tracker and pick the page you were looking for.</p>
        <Link href="/" className="btn-primary mt-7"><ArrowLeft className="h-4 w-4" />Back to the hub</Link>
      </div>
    </section>
  );
}
