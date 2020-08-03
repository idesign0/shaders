#ifdef GL_ES
precision mediump float;
#endif

void main(){
    vec3 color = vec3(0.9255, 0.3333, 0.0588);
    gl_FragColor = vec4(color,1 );   
}
