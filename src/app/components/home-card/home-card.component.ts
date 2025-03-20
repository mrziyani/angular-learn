import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { LucideAngularModule, WavesLadder, Bed, Bath, MapPin } from "lucide-angular";

import { Home } from "../../models/home";

/**
 * Component for displaying a single home card
 * This is a presentational component that receives a Home object via @Input
 */
@Component({
  selector: "app-home-card",
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: "./home-card.component.html",
  styleUrls: ["./home-card.component.css"],
})
export class HomeCardComponent {
  @Input() home!: Home;
  readonly wavesLadderIcon = WavesLadder;
  readonly bedIcon = Bed;
  readonly bathIcon = Bath;
  readonly mapPinIcon = MapPin;
}