declare const enum Direction {
    //% block=left
    Left,
    //% block=right
    Right
}

declare const enum Axes {
    //% block='x' blockIdentity=axes.named
    x,
    //% block='y' blockIdentity=axes.named
    y,
    //% block='z' blockIdentity=axes.named
    z
}

/**
 * An augmented reality marker
 */
declare const enum MarkerCode {
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=0
    Marker0 = 0,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=1
    Marker1 = 1,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=2
    Marker2 = 2,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=3
    Marker3 = 3,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=4
    Marker4 = 4,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=5
    Marker5 = 5,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=6
    Marker6 = 6,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=7
    Marker7 = 7,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=8
    Marker8 = 8,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=9
    Marker9 = 9,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=10
    Marker10 = 10,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=11
    Marker11 = 11,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=12
    Marker12 = 12,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=13
    Marker13 = 13,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=14
    Marker14 = 14,
    //% blockImage=1
    //% blockIdentity=markers.marker enumval=15
    Marker15 = 15
}

declare const enum MarkerEvent {
    //% block="hidden"
    //% enumval=0x01
    Hidden = 0x01,     
    //% block="visible"
    //% enumval=0x02
    Visible = 0x02,  
    //% block="moved"
    //% enumval=0x03
    Moved = 0x03,
    //% block="moved left"
    //% enumval=0x04
    MovedLeft = 0x04,
    //% block="moved right"
    //% enumval=0x05
    MovedRight = 0x05,    
    //% block="moved up"
    //% enumval=0x06
    MovedUp = 0x06,
    //% block="moved down"
    //% enumval=0x07
    MovedDown = 0x07,    
    //% block="moved forward"
    //% enumval=0x11
    MovedForward = 0x11,
    //% block="moved backward"
    //% enumval=0x12
    MovedBackward = 0x12          
}

declare const enum MarkerLoopEvent {
    //% block="hidden"
    //% enumval=0x13    
    WhileHidden = 0x13,
    //% block="visible"
    //% enumval=0x14    
    WhileVisible = 0x14
}

declare const enum MultiMarkerEvent {
    //% block="close to"
    //% enumval=0x15
    Close = 0x15,
    //% block="far from"
    //% enumval=0x16
    Far = 0x16,
    //% block="touching"
    //% enumval=0x17
    Touching = 0x17
}

/**
 * Well known colors for a NeoPixel strip
 */
declare const enum Colors {
    //% block=red blockIdentity=colors.named
    //% enumval=0xFF0000
    Red = 0xFF0000,
    //% block=orange blockIdentity=colors.named
    //% enumval=0xFFA500
    Orange = 0xFFA500,
    //% block=yellow blockIdentity=colors.named
    //% enumval=0xFFFF00
    Yellow = 0xFFFF00,
    //% block=green blockIdentity=colors.named
    //% enumval=0x00FF00
    Green = 0x00FF00,
    //% block=blue blockIdentity=colors.named
    //% enumval=0x0000FF
    Blue = 0x0000FF,
    //% block=indigo blockIdentity=colors.named
    //% enumval=0x4b0082
    Indigo = 0x4b0082,
    //% block=violet blockIdentity=colors.named
    //% enumval=0x8a2be2
    Violet = 0x8a2be2,
    //% block=purple blockIdentity=colors.named
    //% enumval=0xFF00FF
    Purple = 0xFF00FF,
    //% block=pink blockIdentity=colors.named
    //% enumval=0xFF54A6
    Pink = 0xFF54A6,
    //% block=white blockIdentity=colors.named
    //% enumval=0xFFFFFF
    White = 0xFFFFFF,
    //% block=black  blockIdentity=colors.named
    //% enumval=0x000000
    Black = 0x000000
}

/**
 * 3D Shape Primitives supported by THREE.js
 */
declare const enum Shape {
    //% block='box'
    //% blockImage=1
    Box,
    //% block='sphere'
    //% blockImage=1
    Sphere,    
    //% block='cone'
    //% blockImage=1
    Cone, 
    //% block='cylinder'
    //% blockImage=1
    Cylinder,    
    //% block='tetrahedron'
    //% blockImage=1
    Tetrahedron,
    //% block='icosahedron'
    //% blockImage=1    
    Icosahedron,
}

declare const enum Note {
    //% blockIdentity=music.noteFrequency enumval=262
    C = 262,
    //% block=C#
    //% blockIdentity=music.noteFrequency enumval=277
    CSharp = 277,
    //% blockIdentity=music.noteFrequency enumval=294
    D = 294,
    //% blockIdentity=music.noteFrequency enumval=311
    Eb = 311,
    //% blockIdentity=music.noteFrequency enumval=330
    E = 330,
    //% blockIdentity=music.noteFrequency enumval=349
    F = 349,
    //% block=F#
    //% blockIdentity=music.noteFrequency enumval=370
    FSharp = 370,
    //% blockIdentity=music.noteFrequency enumval=392
    G = 392,
    //% block=G#
    //% blockIdentity=music.noteFrequency enumval=415
    GSharp = 415,
    //% blockIdentity=music.noteFrequency enumval=440
    A = 440,
    //% blockIdentity=music.noteFrequency enumval=466
    Bb = 466,
    //% blockIdentity=music.noteFrequency enumval=494
    B = 494,
    //% blockIdentity=music.noteFrequency enumval=131
    C3 = 131,
    //% block=C#3
    //% blockIdentity=music.noteFrequency enumval=139
    CSharp3 = 139,
    //% blockIdentity=music.noteFrequency enumval=147
    D3 = 147,
    //% blockIdentity=music.noteFrequency enumval=156
    Eb3 = 156,
    //% blockIdentity=music.noteFrequency enumval=165
    E3 = 165,
    //% blockIdentity=music.noteFrequency enumval=175
    F3 = 175,
    //% block=F#3
    //% blockIdentity=music.noteFrequency enumval=185
    FSharp3 = 185,
    //% blockIdentity=music.noteFrequency enumval=196
    G3 = 196,
    //% block=G#3
    //% blockIdentity=music.noteFrequency enumval=208
    GSharp3 = 208,
    //% blockIdentity=music.noteFrequency enumval=220
    A3 = 220,
    //% blockIdentity=music.noteFrequency enumval=233
    Bb3 = 233,
    //% blockIdentity=music.noteFrequency enumval=247
    B3 = 247,
    //% blockIdentity=music.noteFrequency enumval=262
    C4 = 262,
    //% block=C#4
    //% blockIdentity=music.noteFrequency enumval=277
    CSharp4 = 277,
    //% blockIdentity=music.noteFrequency enumval=294
    D4 = 294,
    //% blockIdentity=music.noteFrequency enumval=311
    Eb4 = 311,
    //% blockIdentity=music.noteFrequency enumval=330
    E4 = 330,
    //% blockIdentity=music.noteFrequency enumval=349
    F4 = 349,
    //% block=F#4
    //% blockIdentity=music.noteFrequency enumval=370
    FSharp4 = 370,
    //% blockIdentity=music.noteFrequency enumval=392
    G4 = 392,
    //% block=G#4
    //% blockIdentity=music.noteFrequency enumval=415
    GSharp4 = 415,
    //% blockIdentity=music.noteFrequency enumval=440
    A4 = 440,
    //% blockIdentity=music.noteFrequency enumval=466
    Bb4 = 466,
    //% blockIdentity=music.noteFrequency enumval=494
    B4 = 494,
    //% blockIdentity=music.noteFrequency enumval=523
    C5 = 523,
    //% block=C#5
    //% blockIdentity=music.noteFrequency enumval=555
    CSharp5 = 555,
    //% blockIdentity=music.noteFrequency enumval=587
    D5 = 587,
    //% blockIdentity=music.noteFrequency enumval=622
    Eb5 = 622,
    //% blockIdentity=music.noteFrequency enumval=659
    E5 = 659,
    //% blockIdentity=music.noteFrequency enumval=698
    F5 = 698,
    //% block=F#5
    //% blockIdentity=music.noteFrequency enumval=740
    FSharp5 = 740,
    //% blockIdentity=music.noteFrequency enumval=784
    G5 = 784,
    //% block=G#5
    //% blockIdentity=music.noteFrequency enumval=831
    GSharp5 = 831,
    //% blockIdentity=music.noteFrequency enumval=880
    A5 = 880,
    //% blockIdentity=music.noteFrequency enumval=932
    Bb5 = 932,
    //% blockIdentity=music.noteFrequency enumval=988
    B5 = 988,
}

declare const enum BeatFraction {
    //% block="1 beat"
    Whole = 1,
    //% block="1/2 beat"
    Half = 2,
    //% block="1/4 beat"
    Quarter = 4,
    //% block="1/8 beat"
    Eighth = 8,
    //% block="1/16 beat"
    Sixteenth = 16
}

declare const enum Drum {
    //% block="kick"
    //% enumval=1
    Kick = 1,
    //% block="snare"
    //% enumval=2
    Snare = 2,
    //% block="hihat"
    //% enumval=3
    HiHat = 3,
    //% block="click"
    //% enumval=4
    Click = 4,
    //% block="splat"
    //% enumval=5
    Splat = 5
}

declare const enum Effect {
    //% block='distortion'
    Distortion = 1,
    //% block='delay'
    Delay = 2,
    //% block='chorus'
    Chorus = 3,
    //% block='phaser'
    Phaser = 4,
    //% block='reverb'
    Reverb = 5
}

declare const enum Octave {
    //% block='middle'
    Middle = 4,
    //% block='low'
    Low = 3,
    //% block='lowest'
    Lowest = 2,
    //% block='high'
    High = 5
}

declare const enum Wave {
    //% block='sine'
    Sine = 1,
    //% block='square'
    Square = 2,
    //% block='triangle'
    Triangle = 3,
    //% block='sawtooth'
    Sawtooth = 4
}

declare const enum Filter {
    //% block='grayscale'
    Grayscale = 1,
    //% block='sepia'
    Sepia = 2,
    //% block='invert'
    Invert = 3,
    //% block='saturate'
    Saturate = 4,
    //% block='hue-rotate'
    HueRotate = 5,
    //% block='blur'
    Blur = 6,
    //% block='high contrast'
    Contrast = 7,
    //% block='green'
    Green = 8     
}

declare const enum ModelType {
    OBJ,
    STL,
    MTL,
    DAE
}

declare const enum Toggle {
    on,
    off
}