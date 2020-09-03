import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';

export const motion = {
    MoveRight: trigger('moveRight', [
        state('void', style({ opacity: 0, transform: 'translateX(0)' })),
        transition(':enter, :leave', [
            animate(1000, keyframes([
                style({ opacity: 0, transform: 'translateX(-150px)', offset: '0' }),
                style({ opacity: 0.25, transform: 'translateX(-100px)', offset: '0.25' }),
                style({ opacity: 0.5, transform: 'translateX(-50px)', offset: '0.5' }),
                style({ opacity: 0.75, transform: 'translateX(-20px)', offset: '0.75' }),
                style({ opacity: 1, transform: 'translateX(0)', offset: '1' }),
            ]))
        ])
    ]),
    ZoomIN: trigger('zoomIn', [
        state('void', style({ opacity: 0, transform: 'scale(1)' })),
        transition(':enter, :leave', [
            animate(1000, keyframes([
                style({ opacity: 0, transform: 'scale(0.25)', offset: '0.25' }),
                style({ opacity: 0.25, transform: 'scale(0.5)', offset: '0.5' }),
                style({ opacity: 0.5, transform: 'scale(0.75)', offset: '0.75' }),
                style({ opacity: 1, transform: 'scale(1)', offset: '1' }),
                // style({ opacity: 1, transform: 'scale(0)', offset: '1' }),
            ]))
        ])
    ]),
    MoveLeft: trigger('moveLeft', [
        state('void', style({ opacity: 0, transform: 'translateX(0)' })),
        transition(':enter, :leave', [
            animate(1000, keyframes([
                style({ opacity: 0, transform: 'translateX(80px)', offset: '0' }),
                style({ opacity: 0.25, transform: 'translateX(60px)', offset: '0.25' }),
                style({ opacity: 0.5, transform: 'translateX(40px)', offset: '0.5' }),
                style({ opacity: 0.75, transform: 'translateX(20px)', offset: '0.75' }),
                style({ opacity: 1, transform: 'translateX(0)', offset: '1' }),
            ]))
        ])
    ]),
    MoveDown: trigger('moveDown', [
        state('void', style({ opacity: 0, transform: 'translateY(0)' })),
        transition(':enter, :leave', [
            animate(1000, keyframes([
                style({ opacity: 0, transform: 'translateY(80px)', offset: '0' }),
                style({ opacity: 0.25, transform: 'translateY(60px)', offset: '0.25' }),
                style({ opacity: 0.5, transform: 'translateY(40px)', offset: '0.5' }),
                style({ opacity: 0.75, transform: 'translateY(20px)', offset: '0.75' }),
                style({ opacity: 1, transform: 'translateY(0)', offset: '1' }),
            ]))
        ])
    ]),
}
