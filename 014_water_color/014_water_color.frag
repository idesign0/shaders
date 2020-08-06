#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 cord = 6.0* gl_FragCoord.xy/u_resolution;

    for(int n = 1; n < 8; n++){
        float i;
        i = float(n);
        cord += vec2(0.7/ i * sin(i*cord.y+ u_time+ 0.3*i) + 0.8,0.4/ i*sin(cord.x +0.3*i + u_time)+ 1.6);
    }

    cord *= vec2(5.0/cos(cord.y+ u_time+ 0.3) + 0.8,1.0/ cos(cord.x +0.3 + u_time)+ 1.6);

    vec3 color = vec3(0.5*sin(cord.x)+0.5, 0.5*sin(cord.y)+0.5, sin(cord.x+cord.y));

    gl_FragColor = vec4(color,1.0);
}