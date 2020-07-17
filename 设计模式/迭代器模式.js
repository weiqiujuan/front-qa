var each = function( ary, callback ){
    for ( var i = 0, l = ary.length; i < l; i++ ){
        if ( callback( i, ary[ i ] ) === false ){ // callback 的执行结果返回false，提前终止迭代
            break;
        }
    }
};