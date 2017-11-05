import { Component, ViewChild } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import {MainPage} from "../pages";
import {Item} from "../../models/item";
import {Items} from "../../mocks/providers/items";

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  currentItems: Item[];

  form: FormGroup;

  fb: FormBuilder;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public items: Items, formBuilder: FormBuilder, public camera: Camera) {
    this.currentItems = this.items.query();

    this.form = this.fb.group({
      profilePic: [''],
      name: ['', Validators.required],
      about: [''],
      steps: this.fb.array([])
    });

    this.addStep();

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

  }

  ionViewDidLoad() {
  }

  initStep() {
    return this.fb.group({
      name: [''],
      details: ['']
    })
  }

  addStep() {
    const stepArray = <FormArray>this.form.controls['steps'];
    const newStep = this.initStep();

    stepArray.push(newStep);
  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    // this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {

    if (!this.form.valid) { return; }
    // this.viewCtrl.dismiss(this.form.value);
    this.items.add(this.form.value);
    this.navCtrl.push(MainPage);
  }

  patchForm() {
  }
}
