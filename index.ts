function run(command: string, props: any) {}

// should work:
run('load', {});
run('create', { doc: 'some text' });
run('update', { doc: 'some text', id: 1 });

// should Fail
run('llload', {}); //                 'llload' is not permitted
run('load', { doc: 'some text' }); // 'load' doesn't allow params
run('create', {}); //                 'create' is missing param: 'doc'
