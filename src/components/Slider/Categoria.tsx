
import Headline from "./Headline";
import PreviaSlider from "./PreviaSlider";

export default function Categoria() {
  return (
    <div className="min-h-[680px] bg-slate-200 p-8">
      <div className="container mx-auto lg:flex-row">
        <div className="mb-8">
          <Headline title={"Serviço"} />
        </div>
        <PreviaSlider />
      </div>
    </div>
  );
}
