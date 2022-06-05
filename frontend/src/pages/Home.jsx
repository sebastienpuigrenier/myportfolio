import Presentation from "@components/Presentation";
import StackTechnique from "@components/StackTechnique";
import Realisations from "@components/Realisations";
import Challenges from "@components/Challenges";

export default function Home() {
  return (
    <div>
      <Presentation />
      <StackTechnique />
      <Realisations />
      <Challenges />
    </div>
  );
}
