function Promise(fn){
    var CONSTANTS = {
        pending: 'pending',
        rejected: 'rejected',
        resolved: 'resolved',
        function: 'function'
    };

    var state = CONSTANTS.pending,
        value,
        deferred = null;

    function resolve(v){
        try {
            if(v && typeof v.then === CONSTANTS.function){
                v.then(resolve);
                return;
            }

            value = v;
            state = CONSTANTS.resolved;

            if(deferred){
                handle(deferred);
            }
        } catch(e) {
            reject(e);
        }
    }

    function reject(err){
        state = CONSTANTS.rejected;
        value = err;

        if(deferred){
            handle(deferred);
        }
    }

    function handle(handler){

        if(state === CONSTANTS.pending){
            deferred = handler;
            return; //?
        }

        var handlerCallback;

        if(state === CONSTANTS.resolved){
            handlerCallback = handler.onResolved;
        }else{
            handlerCallback = handler.onRejected;
        }

        if(!handlerCallback){
            if(state === CONSTANTS.resolved){
                handler.resolve(value);
            }else{
                handler.reject(value);
            }
            return;
        }

        var ret;
        try {
            ret = handlerCallback(value);
        } catch(e) {
            handler.reject(e);
            return;
        }
        handler.resolve(ret);
    }

    this.then = function(onResolved, onRejected){
        return new Promise(function(resolve){
            handle({
                onResolved: onResolved,
                onRejected: onRejected,
                resolve: resolve,
                reject: reject

            });
        });
    }


    fn(resolve, reject);
}