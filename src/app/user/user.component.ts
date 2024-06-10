import { Component, Input, Output, EventEmitter, output } from '@angular/core';

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

interface User {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // //SIGNAL: O Angular é capaz de identificar todos os locais, por exemplo, em seus modelos, onde esse valor está sendo usado.
  // //Portanto, o Angular configura um mecanismo de rastreamento que garante automaticamente que a interface do usuário seja atualizada sempre que o valor subjacente for alterado.
  // selectedUser = signal(DUMMY_USERS[randomIndex])
  // //COMPUTED: usado quando se vai usar o SIGNAL
  // imagePath = computed(() => {
  //   'assets/users/' + this.selectedUser().avatar
  // })

  // // get imagePath() {
  // //   return 'assets/users/' + this.selectedUser.avatar
  // // }

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex])
  // }

  //Ao usar por exemplo @Input() name!: string; estamos dizendo ao Angular que esse falor existe, mas as vezes ele pode não existir
  //Ao usarmos @Input({required: true}) avatar!: string; o Angular não irá funcionar a não que esse valor esteja de fato definido
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: User
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  //Ao usar o input com o i minuscúlo chamamos uma função especial do Angular, é uma maneira alternativa ao @Input, os parâmetros viram signals, então deve-se trabalhar como signals
  // avatar = input.required<string>(); //READONLY
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar
  // })

  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
