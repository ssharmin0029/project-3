import * as THREE from 'three'
import React from 'react'


const Three  = ( ) => {


    
        const scene = new THREE.Scene();
                    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

                    const renderer = new THREE.WebGLRenderer();
                    renderer.setSize( window.innerWidth, window.innerHeight );
                    renderer.setClearColor("#ffffff")
                    document.body.appendChild( renderer.domElement );

                    window.addEventListener('resize', () => {
                    
                        renderer.setSize( window.innerWidth, window.innerHeight );
                        camera.aspect = window.innerWidth/window.innerHeight
                        camera.updateProjectionMatrix();
                    })
                   
                    const light = new THREE.PointLight('0xffd700');
                    light.position.set(0, 0, 15)
                
                    
                  
                    const geometry = new THREE.CircleGeometry(1, 30);
                    const material = new THREE.MeshBasicMaterial( { color: 0xffd700 } );
                    const circle = new THREE.Mesh( geometry, material );

                    const geo = new THREE.BoxGeometry()
                    const mats = new THREE.MeshDepthMaterial({color: 0x00ffd})
                    const box = new THREE.Mesh(geo, mats)
                    scene.add( circle );
                    scene.add( box )
                    scene.add(light)
                    camera.position.z = 25;

                    const animate = function () {
                        requestAnimationFrame( animate );

                        
                        circle.rotation.y += 0.01;
                    

                        renderer.render( scene, camera );
                    };

                    animate();
    
            
        
        return(
            <div></div>
        )
}

export default Three;