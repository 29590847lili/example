class CustomPromise{
    constructor(handleFunc){
        this.state = 'pending';
        this.value = undefined;

        this.fulFilledList = [];

        handleFunc(this.triggerResolve.bind(this));
    }

    triggerResolve(val){
        setTimeout(()=>{
            if(this.state !== 'pending') return;

            this.state = 'fulfilled';
            this.value = val;
            this.fulFilledList.forEach(item => item(val));
            this.fulFilledList =[];
        }, 0);
    }

    then(onResolved,onRejected){
        const { state } = this;

        return new CustomPromise((onNextResolved,onNextRejected)=>{

            function fullFulFilled(val){
                if(typeof onResolved !== 'function'){
                    onNextResolved(val)
                }else {
                    const res = onResolved(val)

                    if(res && typeof res.then === 'function'){
                        res.then(onNextResolved)
                    }else {
                        onNextResolved(res)
                    }
                }
            }
            switch(state){
                case 'pending':{
                    this.fulFilledList.push(fullFulFilled);
                    break;
                }
            }
            
        })
    }

    catch(rejected){
        return this.then(null,rejected)       
    }
    static resolve(val){
        return new CustomPromise(resolve => resolve(val))
    }

    static all(list){
        let count = 0;
        const value =[];
        for( const [i , instents] of list.entries()){
            instents.then(
                res =>{
                    values[i] = res;
                    count++;
                    if (count === list.length) resolve(values);
                },
                err =>{
                    reject(err);
                }

            )
        }
    }
}

const createPromise = function(time){
    return new CustomPromise(function(resolve,reject){
        setTimeout(resolve,time);
    });
}

const myPromise = createPromise(1000);

myPromise.then(function(){
    console.log('then ')
});