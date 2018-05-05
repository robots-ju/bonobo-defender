
import PhysicsGroup from './PhysicsGroup';

export default class EnemySquad extends PhysicsGroup {
    sceneUpdate(scene) {
        this.getChildren().forEach(enemy => {
            if (Phaser.Geom.Intersects.RectangleToRectangle(scene.bonobo.getBounds(), enemy.getBounds())) {
                this.remove(enemy, true, true);

                // TODO: faire quelque chose d'autre ou retirer

                return;
            }

            const projectiles = scene.projectiles.getChildren();

            // Utilisation d'une boucle simple au lieu de forEach()
            // pour pouvoir utiliser return sur la boucle principale
            for (let i = 0; i < projectiles.length; i++) {
                const projectile = projectiles[i];

                if (Phaser.Geom.Intersects.RectangleToRectangle(enemy.getBounds(), projectile.getBounds())) {
                    this.remove(enemy, true, true);
                    scene.projectiles.remove(projectile, true, true);

                    scene.partieEnCours.aTueEnemy(enemy, projectile);

                    // Il faut immédiatement quitter la boucle des ennemis
                    // sinon au prochain test de collision ou de changement de direction
                    // une erreur se produit
                    return;
                }
            }

            enemy.dirigeVers(scene.bonobo);
        });
    }
}
