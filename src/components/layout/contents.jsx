import KeyVisual from "@/components/layout/key-visual";
export default function Contents({
  title,
  backgroundImage,
  children,
  className = "",
  marginTop = "mt-[120px]",
  marginBottom = "mb-[200px]",
}) {
  return (
    <div className="min-w-[1200px]">
      <KeyVisual title={title} backgroundImage={backgroundImage} />
      <main
        className={`container-fixed ${marginTop} ${marginBottom} ${className}`}
      >
        {children}
      </main>
    </div>
  );
}
