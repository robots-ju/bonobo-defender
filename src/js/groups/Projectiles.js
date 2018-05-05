import PhysicsGroup from './PhysicsGroup';
import Banane from '../sprites/Banane';

export default class Projectiles extends PhysicsGroup {
    fireBanane(scene) {
        const banane = new Banane(this.scene, scene.partieEnCours.bananeCharged());

        this.addPhysics(banane);

        banane.setPosition(scene.bonobo.x, scene.bonobo.y);
        banane.setVelocityY(-512);
    }
}
