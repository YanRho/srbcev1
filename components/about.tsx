"use client";

export const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gray-100 text-gray-900 relative z-0"
    >
      <div className="container mx-auto max-w-5xl px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-6 text-[#233df8]">
          About Us
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          At SRB Construction & Engineering Services, we specialize in delivering high-quality construction
          and engineering solutions. Our team is dedicated to turning your vision into reality with precision,
          expertise, and professionalism.
        </p>

        {/* About Highlights */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Mission */}
          <div className="max-w-xs text-center">
            <h3 className="text-2xl font-semibold mb-4 text-[#14239b]">
              Our Mission
            </h3>
            <p>
              To provide innovative and sustainable construction solutions while exceeding client expectations.
            </p>
          </div>

          {/* Vision */}
          <div className="max-w-xs text-center">
            <h3 className="text-2xl font-semibold mb-4 text-[#14239b]">
              Our Vision
            </h3>
            <p>
              To be a trusted leader in the construction and engineering industry, recognized for quality and integrity.
            </p>
          </div>

          {/* Values */}
          <div className="max-w-xs text-center">
            <h3 className="text-2xl font-semibold mb-4 text-[#14239b]">
              Our Values
            </h3>
            <p>
              Integrity, excellence, innovation, and commitment to sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
