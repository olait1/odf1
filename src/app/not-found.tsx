import Link from "@/components/base/Link";

export default async function NotFound() {
  return (
    <>
      <div className="container text-center min-h-48 flex justify-center items-center flex-col py-8">
        Oops! You seem to have lost your way. Let's get you back on track.
        <br />
        <Link href="/" className="text-primary">
          Return home
        </Link>
      </div>
    </>
  );
}
