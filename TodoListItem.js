export default function TodoListItem(props){
return (
<li style={{color:props.color}}>{props.children}  { } 
    {props.person?.name} 
</li>
);

}