import Image from "next/image";
import logoImg from "../assets/images/logo-3.png";
import Link from "next/link";
export function AppLogo(props: any) {
  /* Logo */

  return (
    <Link
      href="/"
      {...props}
      className={
        "pt-2 flex items-center justify-center " +
        props.className +
        (props.large ? " flex-col" : "")
      }
    >
      <Image
        src={logoImg}
        className={`${props.large ? "h-12" : "h-6"} w-auto mb-1`}
        alt="logo"
      />

      <div
        className={`text-secondary ml-1.5 text-xs uppercase ${
          props.large ? "text-center" : ""
        }`}
        style={{ letterSpacing: 0.5 }}
      >
        Omovigho Donald
        <br />
        Foundation
      </div>
    </Link>
  );
}
