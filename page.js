directory = 0;
$('body').terminal({
    help: function() {
        this.echo('-----------------\nHelp Menu:\n\tcd\n\tls\n\tcat\n\tpwd\n\tman\n\tclear\n-----------------');
    },
    man: function(cmd) {
        if (cmd == "cd"){
            this.echo('Change directory\nEx: cd projects\nEx: cd .. --> takes you one directory back.');
        }
        else if (cmd == "ls"){
            this.echo('Get a list of everything in a directory\nEx: ls');
        }
        else if (cmd == "cat"){
            this.echo('Get file contents\nEx: cat introduction');
        }
        else if (cmd == "pwd"){
            this.echo('Get current directory\nEx: pwd');
        }
        else if (cmd == "man"){
            this.echo('Get help for a command\nEx: man cd');
        }
        else if (cmd == "clear"){
            this.echo('Clears terminal text\nEx: clear');
        }
        else{
            this.echo('Command not found');
        }
    },
    pwd: function() {
        if (directory == 0) {
            this.echo('neilHommes');
        }
        else if (directory == 1) {
            this.echo('neilHommes/projects');
        }
    },
    ls: function() {
        if (directory == 0) {
            this.echo('\tintroduction\n\tabout_me\n\t/projects/\n\tcontact_me');
        } else if (directory == 1) {
            this.echo('\tCySky\n\tleaguescript\n\tStudent-tower-Defense\n\tCygify\n\tChatTriggers-Weight-Mod\n\tChat-Boi');
        }
    },
    cd: function(dir) {
        if (dir == 'projects' || dir == './projects' || dir == './projects/') {
            if(directory == 0) {
                directory = 1;
            }
            else{
                this.echo('No such directory');
            }
        }
        else if (dir == '..') {
            if(directory == 1) {
                directory = 0;
            }
            else{
                this.echo('Already in the root directory');
            }
        }
        else{
            this.echo('No such directory');
        }
    },
    cat: function(dir) {
        if (directory == 0){
            if (dir == "introduction"){
                this.echo('Hey! My name is Neil and I am currently a 1st year Computer Science student studying at\nPurdue University. I am interested in web development, cybersecurity, and software engineering.');
            }
            else if (dir == "about_me"){
                this.echo('I really enjoy coding random personal projects, playing video games, playing the piano, cybersecurity ctfs,\nMagic the Gathering, and fencing.');
            }
            else if (dir == "contact_me"){
                this.echo('Discord: CygnusX#5667\nEmail: qh4nveh@gmail.com\nGithub: https://github.com/CygnusX-26\nLinkedIn: https://www.linkedin.com/in/neil-van-eikema-hommes-34b369218/');
            }
            else{
                this.echo('No such file');
            }
        }
        else if (directory == 1){
            if (dir == "CySky"){
                this.echo('Will add here later');
            }
            else if (dir == "leaguescript"){
                this.echo('Will add here later');
            }
            else if (dir == "Student-tower-Defense"){
                this.echo('Will add here later');
            }
            else if (dir == "Cygify"){
                this.echo('Will add here later');
            }
            else if (dir == "ChatTriggers-Weight-Mod"){
                this.echo('Will add here later');
            }
            else if (dir == "Chat-Boi"){
                this.echo('Will add here later');
            }
            else{
                this.echo('No such file');
            }
        }
    },
    clear: function() {
        this.clear();
    }
}, {
    greetings: 'Neil Van Eikema Hommes v1.0.0 built-in shell\nuse "help" to see a list of built-in commands.',
    prompt: 'neil@Hommes:/$ '
});