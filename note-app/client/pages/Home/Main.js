import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <>
      <main>
        {/* <!-- part one --> */}
        <div className="px-3 py-3 my-3 text-center">
          <h2 className="display-4 fw-bold">Tame your work, organize your life</h2>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Remember everything and tackle any project with your notes, tasks, and schedule all in one place.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link href="/Register/Register">
                <button type="button" className="btn btn-success btn-lg px-4 gap-3">
                  Sign up for free
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- part two --> */}
        <div className="container col-xxl-8 px-4 py-4">
          <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-8">
              <Image src="/gambar1.png" className="d-block mx-lg-auto img-fluid" alt="Gambar Utama" width={700} height={500} loading="lazy" />
            </div>

            <div className="col-10 col-sm-8 col-lg-4">
              <h4 className="fw-bold mb-0">Work Anywhere</h4>
              <p>Keep important info handy your notes sync automatically to all your devices.</p>
              <h4 className="fw-bold mb-0">Remember Everything</h4>
              <p>Make notes more useful by adding text, images, audio, scans, PDFs, and documents.</p>
              <h4 className="fw-bold mb-0">Turn To-Do Into Done</h4>
              <p>Bring your notes, tasks, and schedules together to get things done more easily.</p>
              <h4 className="fw-bold mb-0">Find Things Fast</h4>
              <p>Get what you need, when you need it with powerful, flexible search capabilities.</p>
            </div>
          </div>
        </div>
        {/* <!-- part three --> */}
        <div className="px-4 pt-4 my-4 text-center border-bottom">
          <h1 className="display-4">Find your productivity happy place</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Store your memories and data in a beautiful note with the nicest of functions.</p>
            <div className="overflow-hidden">
              <div className="container px-4">
                <Image src="/gambar2.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width={1280} height={720} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
