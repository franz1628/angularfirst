import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seller } from '../../models/seller.model';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'app-seller-editor-page',
  templateUrl: './seller-editor-page.component.html',
  styleUrl: './seller-editor-page.component.css'
})
export class SellerEditorPageComponent implements OnInit {
  isEdit = false;
  loading = false;
  selectedSeller: Seller | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sellerService: SellerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.isEdit = true;
      this.loadSeller(Number(id));
    }
  }

  loadSeller(id: number): void {
    this.loading = true;
    this.sellerService.getById(id).subscribe({
      next: (seller) => {
        this.selectedSeller = seller;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load seller', err);
        this.loading = false;
        this.router.navigate(['/seller']);
      }
    });
  }

  onSave(sellerData: Partial<Seller>): void {
    this.loading = true;
    const action = this.isEdit && this.selectedSeller
      ? this.sellerService.update(this.selectedSeller.id, sellerData)
      : this.sellerService.add(sellerData);

    action.subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/seller']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Operation failed', err);
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/seller']);
  }
}
