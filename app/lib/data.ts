export const title: string = 'Welcome to Next Super Blog';
export const subTitle: string =
  'Discover stories, thinking, and expertise from writers on any topic. Enjoy it!';

export let headerTitle: string = 'Next Super Blog'

export type urlHeaderType = {
    label : string, 
    url: string
};

export let headerMenu: urlHeaderType[] = [
    {
        label : "Home",
        url : "/"
    },
    {
        label : "About",
        url : "/about"
    },
    {
        label : "Contact",
        url : "/contact"
    },
    {
        label : "Login",
        url : "/login"
    },
]

