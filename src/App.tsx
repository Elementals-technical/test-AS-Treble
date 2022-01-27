import {
  ThreekitProvider,
  Player,
  Share,
  PortalToElement,
  FlatForm,
} from '@threekit-tools/treble';
import s from './App.module.scss';
import ExampleChangeState from './mainComponents/ExampleChangeState/ExampleChangeState';
const App = () => {
  return (
    <ThreekitProvider>
      <div className="tk-treble-player">
        <Player>
          <Player.TopRightWidgets>
            <Share />
          </Player.TopRightWidgets>
        </Player>
      </div>
      <PortalToElement to="tk-treble-form" strict={true}>
        {/* кастомний компонент */}
        <ExampleChangeState />

        {/* встроєний компонент treble */}
        <FlatForm />
      </PortalToElement>
    </ThreekitProvider>
  );
};

export default App;
