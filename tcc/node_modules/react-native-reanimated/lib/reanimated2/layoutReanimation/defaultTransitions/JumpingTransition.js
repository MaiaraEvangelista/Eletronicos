import { withSequence, withTiming } from '../../animation';
import { Easing } from '../../Easing';
import { BaseAnimationBuilder } from '../animationBuilder';
export class JumpingTransition extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            var _a;
            const delayFunction = this.getDelayFunction();
            const callback = this.callbackV;
            const delay = this.getDelay();
            const duration = ((_a = this.durationV) !== null && _a !== void 0 ? _a : 300) / 2;
            const config = { duration: duration * 2 };
            return (values) => {
                'worklet';
                const d = Math.max(Math.abs(values.originX - values.boriginX), Math.abs(values.originY - values.boriginY));
                return {
                    initialValues: {
                        originX: values.boriginX,
                        originY: values.boriginY,
                        width: values.bwidth,
                        height: values.bheight,
                    },
                    animations: {
                        originX: delayFunction(delay, withTiming(values.originX, config)),
                        originY: delayFunction(delay, withSequence(withTiming(Math.min(values.originY, values.boriginY) - d, {
                            duration,
                            easing: Easing.out(Easing.exp),
                        }), withTiming(values.originY, Object.assign(Object.assign({}, config), { duration, easing: Easing.bounce })))),
                        width: delayFunction(delay, withTiming(values.width, config)),
                        height: delayFunction(delay, withTiming(values.height, config)),
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new JumpingTransition();
    }
}
