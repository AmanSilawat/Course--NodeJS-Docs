const path = require('path');

// !path.basename(path[, ext])
path.basename('/folderName/filename.html', '.html'); // filename
path.basename('/folderName/filename.html'); // filename.html

path.win32.basename('/folderName/filename.html', '.html'); // filename.html
path.win32.basename('/folderName/filename.HTML', '.html'); // filename.HTML



// !path.delimiter

// !Provides the platform-specific path delimiter:  for Windows ";", for POSIX ":"
path.delimiter; // : or ;

process.env.PATH;
// Prints: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin

process.env.PATH.split(path.delimiter);
// Returns: [ '/usr/local/sbin', '/usr/local/bin', '/usr/sbin', '/usr/bin', '/sbin', '/bin', '/usr/games', '/usr/local/games', '/snap/bin' ]


// ! path.dirname(path)

path.dirname('/folderName/filename.html'); // folderName
path.dirname(''); // filename.HTML

// !path.extname(path)
path.extname('filename.html'); // .html

path.extname('filename.abc.md'); // Returns: '.md

path.extname('filename.'); // Returns: '.'

path.extname('filename'); // Returns: ''

path.extname('.filename'); // Returns: ''

path.extname('.filename.md'); // Returns: '.md'


// !path.format(pathObject)
/*
pathObject: Object type
    dir: string type
    root: string type
    base: string type
    name: string type
    ext: string type
    Returns: string type
*/

// pathObject.root is ignored if pathObject.dir is provided
// pathObject.ext and pathObject.name are ignored if pathObject.base exists

path.format({
    root: '/ignored',
    dir: '/folderName',
    base: 'filename.txt'
}); // /folderName/filename.txt

path.format({
    root: '/',
    base: 'filename.txt',
    ext: 'ignored'
}); // /filename.txt

path.format({
    root: '/',
    name: 'filename',
    ext: '.txt'
});


// ! path.isAbsolute(path)

// if path is an absolute path then return true. path length is zero, false will be returned.

path.isAbsolute('/folderName/subFolderName'); // true
path.isAbsolute('/folderName/..');  // true
path.isAbsolute('folderName/');     // false
path.isAbsolute('.');        // false


// !path.join([...paths])

//...paths "string type : A sequence of path segments


path.join('/pathA', 'pathB', 'pathC/pathD', 'pathE', '..'); // /pathA/pathB/pathC/pathD
path.join('/folderName', '.', 'subFolderName'); // /folderName/subFolderName

// path.join('foo', {}, 'bar');
// Throws 'TypeError: Path must be a string. Received {}'


// !path.normalize(path)
path.normalize('/pathA/pathB/pathC/..'); // /pathA/pathB

// !path.parse(path)
// return: Object

path.parse('/pathA/pathB/pathC/..');
/*
{
  root: '/',
  dir: '/pathA/pathB/pathC',
  base: '..',
  ext: '',
  name: '..'
}
*/

path.parse('/folderName/subFolderName/filename.txt');

/*
{
  root: '/',
  dir: '/folderName/subFolderName',
  base: 'filename.txt',
  ext: '.txt',
  name: 'filename'
}
*/


// !path.posix
// !POSIX (Portable Operating System Interface) is a family of standards specified by the IEEE Computer Society for maintaining compatibility between operating systems. 
/*
The path.posix property provides access to POSIX specific implementations of the path methods.

The API is accessible via require('path').posix or require('path/posix').
*/

path.posix.basename('/folderName/filename.html'); // filename.html
path.posix.dirname('/folderName/filename.html'); // /folderName

// !path.relative(from, to)
path.relative('/folderName/subFolderName1/folderA', '/folderName/subFolderName2/folderB');
// Returns: '../../subFolderName2/folderB'


// ! path.resolve([...paths])

console.log(path.resolve('/foo/bar', './baz'));
// Returns: '/foo/bar/baz'

console.log(path.resolve('/foo/bar', '/tmp/file/'));
// Returns: '/tmp/file'

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
// If the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'


// !path.sep

console.log('foo/bar/baz'.split(path.sep));
// Returns: ['foo', 'bar', 'baz']


// !path.toNamespacedPath(path)

console.log(path.toNamespacedPath('folderName/filename.txt')); // folderName/filename.txt


// !path.win32
console.log(path.win32.toNamespacedPath('folderName/filename.txt')); // folderName/filename.txt