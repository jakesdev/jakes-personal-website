import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-test-feature",
  imports: [CommonModule],
  templateUrl: "./test-feature.component.html",
  styleUrls: ["./test-feature.component.scss"],
  providers: [],
})
export class TestFeatureComponent {
  currentPosition = "";
  mouseMove(event: MouseEvent) {
    const box = document.getElementById("box1");
    const boxWidth = box?.offsetWidth;
    const boxHeight = box?.offsetHeight;

    const axisX = event.x - box?.getBoundingClientRect().x!;
    const axisY = event.y - box?.getBoundingClientRect().y!;

    if (axisX === boxWidth! / 2 && axisY === boxHeight! / 2) {
      console.log("Center");
      this.currentPosition = "center";
    }

    const positionX = axisX / boxWidth!;
    const positionY = axisY / boxHeight!;

    if (positionX < 0.5 && positionY < 0.5) {
      if (positionX < positionY) {
        console.log("Left");
        this.currentPosition = "Left";
      } else {
        console.log("Top");
        this.currentPosition = "Top";
      }
    }
    if (positionX < 0.5 && positionY > 0.5) {
      if (0.5 - positionX > positionY - 0.5) {
        console.log("Left");
        this.currentPosition = "Left";
      } else {
        console.log("Bottom");
        this.currentPosition = "Bottom";
      }
    }
    if (positionX > 0.5 && positionY < 0.5) {
      if ((0.5 - positionX) * -1 > (positionY - 0.5) * -1) {
        console.log("Right");
        this.currentPosition = "Right";
      } else {
        console.log("Top");
        this.currentPosition = "Top";
      }
    }
    if (positionX > 0.5 && positionY > 0.5) {
      if ((0.5 - positionX) * -1 > positionY - 0.5) {
        console.log("Right");
        this.currentPosition = "Right";
      } else {
        console.log("Bottom");
        this.currentPosition = "Bottom";
      }
    }
  }
}
