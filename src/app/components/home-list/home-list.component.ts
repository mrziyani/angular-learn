import { Component, OnInit, inject, signal, computed } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeCardComponent } from "../home-card/home-card.component";
import { HomeService } from "../../services/home.service";
import { Home } from "../../models/home";

@Component({
  selector: "app-home-list",
  standalone: true,
  imports: [CommonModule, HomeCardComponent],
  templateUrl: "./home-list.component.html",
  styleUrl: "./home-list.component.css",
})
export class HomeListComponent implements OnInit {
  // Inject the service using the new inject function
  private homeService = inject(HomeService);

  // Using signals for reactive state
  homes = signal<Home[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);

  // Computed value based on homes signal
  hasHomes = computed(() => this.homes().length > 0);

  ngOnInit() {
    this.loadHomes();
  }

  loadHomes() {
    this.isLoading.set(true);
    this.error.set(null);

    this.homeService.getAllHomes().subscribe({
      next: (homes) => {
        this.homes.set(homes);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set("Failed to load homes. Please try again later.");
        this.isLoading.set(false);
        console.error("Error fetching homes:", err);
      },
    });
  }

  refreshHomes() {
    this.loadHomes();
  }
}