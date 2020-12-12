import {useThree} from "react-three-fiber";
import {CubeTextureLoader} from "three";

export default function SkyBox() {
    const {scene} = useThree();
    const loader = new CubeTextureLoader();
    const texture = loader.load([
        'nx_left.png',
        'px_right.png',
        'py_top.png',
        'ny_bottom.png',
        'pz_back.png',
        'nz_front.png'
    ]);

    // Set the scene background property to the resulting texture.
    scene.background = texture;
    return null;
}
