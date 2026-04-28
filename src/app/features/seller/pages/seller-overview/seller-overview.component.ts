import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Seller } from '../../models/seller.model';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'app-seller-overview',
  templateUrl: './seller-overview.component.html',
  styleUrl: './seller-overview.component.css'
})
export class SellerOverviewComponent implements OnInit {
  sellers$: Observable<Seller[]>;
  loading = false;

  constructor(
    private sellerService: SellerService,
    private router: Router
  ) {
    this.sellers$ = this.sellerService.sellers$;
  }

  ngOnInit(): void {
    this.sellerService.refreshSellerList();
  }

  onAdd(): void {
    this.router.navigate(['/seller/new']);
  }

  onEdit(id: number): void {
    this.router.navigate(['/seller/edit', id]);
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to remove this seller?')) {
      this.sellerService.delete(id).subscribe({
        next: () => this.sellerService.refreshSellerList(),
        error: (err) => console.error('Delete failed', err)
      });
    }
  }
}
