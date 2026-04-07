export default function HomeRating() {
  return (
    <section className="w-full" style={{ background: "#ff8311" }}>
      <div className="container py-[6rem]">
        <div className="flex flex-col md:flex-row items-center gap-[4rem]">
          {/* Left column */}
          <div className="col-md-7 flex flex-col gap-[2rem] flex-1">
            {/* Label */}
            <span
              className="text-[1.4rem] font-medium uppercase tracking-widest"
              style={{ color: "rgba(1,4,55,0.7)" }}
            >
              Клиенты считают, что
            </span>

            {/* Heading */}
            <h2
              className="text-[3rem] leading-[4.3rem] font-medium"
              style={{ color: "#010437" }}
            >
              Наш сервис просто супер!
            </h2>

            {/* Subtitle */}
            <p
              className="text-[1.6rem] leading-[2.4rem]"
              style={{ color: "rgba(1,4,55,0.7)", marginBottom: 0 }}
            >
              Нас оценивают на ведущих рейтингах
            </p>

            {/* Rating score */}
            <div className="flex items-baseline gap-[1rem]">
              <span
                className="text-[6rem] leading-[1] font-semibold"
                style={{ color: "#010437" }}
              >
                4.7
              </span>
              <span
                className="text-[2rem] font-medium"
                style={{ color: "rgba(1,4,55,0.6)" }}
              >
                из
              </span>
              <span
                className="text-[3.6rem] font-semibold"
                style={{ color: "#010437" }}
              >
                5
              </span>
            </div>

            {/* Star row */}
            <div className="flex items-center gap-[0.6rem]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill={star <= 4 ? "#010437" : "none"}
                  stroke="#010437"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>

            {/* Rating logos */}
            <div className="flex items-center gap-[2.4rem] flex-wrap">
              {/* Trustpilot placeholder */}
              <div
                className="flex items-center justify-center rounded-[0.6rem] px-[2rem] py-[1rem]"
                style={{ background: "rgba(1,4,55,0.1)", minWidth: "14rem", height: "5rem" }}
              >
                <span className="text-[1.4rem] font-semibold" style={{ color: "#010437" }}>
                  Trustpilot
                </span>
              </div>
              {/* Google placeholder */}
              <div
                className="flex items-center justify-center rounded-[0.6rem] px-[2rem] py-[1rem]"
                style={{ background: "rgba(1,4,55,0.1)", minWidth: "14rem", height: "5rem" }}
              >
                <span className="text-[1.4rem] font-semibold" style={{ color: "#010437" }}>
                  Google Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right decorative col */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div
              className="rounded-[1.2rem] w-[36rem] h-[28rem] flex items-center justify-center"
              style={{ background: "rgba(1,4,55,0.1)" }}
            >
              <span
                className="icons i-hand text-[8rem]"
                style={{ color: "rgba(1,4,55,0.25)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
