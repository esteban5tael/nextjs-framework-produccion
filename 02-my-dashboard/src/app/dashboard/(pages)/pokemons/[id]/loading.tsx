export default function LoadingPage() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <span
                    className="inline-block box-border rounded-full border-4 border-white border-b-transparent"
                    style={{
                        width: "48px",
                        height: "48px",
                        animation: "rotation 1s linear infinite",
                    }}
                ></span>
                <style>{`
          @keyframes rotation {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
            </div>
        </>
    );
}
