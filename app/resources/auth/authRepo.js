import Realm from 'realm';

const AuthSchema = {
    name: 'Auth',
    primaryKey: 'name',
    properties: {
        name: 'string',
        userId: 'string',
        token: 'string',
        expiry: 'int'
    },
};

let authRealm = new Realm({
    schema: [AuthSchema],
    schemaVersion: 1
});

export function createAuth(auth = { userId: '', token: '', expiry: 0}){
    let authResult;

    // we first delete if still exist
    deleteAuth();

    authRealm.write(() => {
        authResult = authRealm.create('Auth', {
            name: 'current',
            userId: auth.userId,
            token: auth.token,
            expiry: auth.expiry
        }, true);
    });

    return authResult;    
}

export function getAuth(){
   let authEntity = authRealm.objects('Auth').filtered(`name = "current"`);
   if (!authEntity || authEntity.length == 0) {
    return undefined;
  }

  return {
      name: authEntity[0].name,
      userId: authEntity[0].userId,
      token: authEntity[0].token,
      expiry: authEntity[0].expiry
  };
}

export function deleteAuth() {
    authRealm.write(() => {
        let auth = authRealm.objects('Auth');
        let authEntity = auth.filtered(`name = "current"`);
        if (authEntity.isValid()) {
            authRealm.delete(authEntity);
        }
    });
}

