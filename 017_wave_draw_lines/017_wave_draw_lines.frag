#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord = 1.0*(gl_FragCoord.xy/u_resolution.xy);
    float color = 0.0;

    coord.x += sin(coord.x*u_time/300.0 + sin(u_time + coord.y*5.0 + cos(u_time*1.0+coord.x *30.0 )))*0.5;
    coord.y += cos(coord.x*20.0 + cos(u_time + coord.y*50.0 + sin(u_time*1.0+coord.x *50.0 )))*0.2;
    color += sin(coord.x*20.0 + sin(u_time + coord.y*50.0 +cos(coord.x *30.0 + u_time*1.0)))*0.5;

    gl_FragColor = vec4(vec3((color*1.0 )*coord.x*1.0,(color*1.0)*coord.y,color*1.1),1.0);
}