#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 cord = (gl_FragCoord.xy/u_resolution.xy);
    float color = 0.0;

    color += sin(cord.x*50.0 + cos(u_time+cord.y*10.0 + sin(cord.x*50.0 + u_time *5.0) )) *2.0;
    color -= cos(cord.x*40.0 + sin(u_time+cord.y*10.0 + cos(cord.x*50.0 + u_time *8.0) )) *2.0;
    color *= sin(cord.x*30.0 + cos(u_time+cord.y*10.0 + sin(cord.x*50.0 + u_time *5.0) )) *2.0;
    color *= cos(cord.x*10.0 + sin(u_time+cord.y*10.0 + cos(cord.x*50.0 + u_time *8.0) )) *2.0;
 
    gl_FragColor = vec4(vec3(color*75.0 + cord.x*80.0, color*155.0 + cord.y*25.0,color*15.0),1.0);
    
    }